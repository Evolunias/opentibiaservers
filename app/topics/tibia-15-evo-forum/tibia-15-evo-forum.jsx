import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-forum');
}

export default function Tibia15EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-forum" />;
}
