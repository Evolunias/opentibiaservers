import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-forum');
}

export default function Tibia12EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-forum" />;
}
