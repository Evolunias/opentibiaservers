import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-low-exp-forum');
}

export default function Tibia84LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-low-exp-forum" />;
}
