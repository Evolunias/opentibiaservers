import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-forum');
}

export default function Tibia14LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-forum" />;
}
