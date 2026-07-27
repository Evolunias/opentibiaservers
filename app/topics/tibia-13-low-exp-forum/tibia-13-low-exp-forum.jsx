import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-forum');
}

export default function Tibia13LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-forum" />;
}
