import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-forum');
}

export default function Tibia100EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-forum" />;
}
