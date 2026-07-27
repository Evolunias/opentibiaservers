import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-forum');
}

export default function LowrateOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-forum" />;
}
