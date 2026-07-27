import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-ots');
}

export default function OfficialCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-ots" />;
}
