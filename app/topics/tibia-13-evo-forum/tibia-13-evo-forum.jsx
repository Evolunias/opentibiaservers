import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-forum');
}

export default function Tibia13EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-forum" />;
}
