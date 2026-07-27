import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-forum');
}

export default function Tibia12LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-forum" />;
}
