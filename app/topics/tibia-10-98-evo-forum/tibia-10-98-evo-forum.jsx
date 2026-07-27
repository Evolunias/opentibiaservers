import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-evo-forum');
}

export default function Tibia1098EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-evo-forum" />;
}
