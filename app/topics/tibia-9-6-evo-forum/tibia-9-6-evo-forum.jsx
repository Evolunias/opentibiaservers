import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-forum');
}

export default function Tibia96EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-forum" />;
}
