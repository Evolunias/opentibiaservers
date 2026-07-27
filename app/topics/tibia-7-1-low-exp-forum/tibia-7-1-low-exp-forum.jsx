import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-forum');
}

export default function Tibia71LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-forum" />;
}
