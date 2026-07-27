import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-forum');
}

export default function TopOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-forum" />;
}
