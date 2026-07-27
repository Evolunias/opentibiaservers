import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-ots');
}

export default function OfficialNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-ots" />;
}
