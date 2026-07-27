import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-forum');
}

export default function Tibia84EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-forum" />;
}
