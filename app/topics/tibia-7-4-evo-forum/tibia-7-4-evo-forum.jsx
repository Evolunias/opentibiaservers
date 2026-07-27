import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-forum');
}

export default function Tibia74EvoForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-forum" />;
}
