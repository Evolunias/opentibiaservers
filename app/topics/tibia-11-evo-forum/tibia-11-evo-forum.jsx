import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-forum');
}

export default function Tibia11EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-forum" />;
}
