import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-ot');
}

export default function OfficialCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-ot" />;
}
