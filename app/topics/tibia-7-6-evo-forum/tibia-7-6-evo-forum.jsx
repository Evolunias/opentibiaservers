import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-forum');
}

export default function Tibia76EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-forum" />;
}
