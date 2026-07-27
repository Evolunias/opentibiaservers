import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-forum');
}

export default function Tibia15LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-forum" />;
}
