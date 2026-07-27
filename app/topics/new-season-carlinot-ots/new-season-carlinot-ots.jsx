import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-ots');
}

export default function NewSeasonCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-ots" />;
}
