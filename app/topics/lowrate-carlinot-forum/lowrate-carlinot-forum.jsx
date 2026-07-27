import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-forum');
}

export default function LowrateCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-forum" />;
}
