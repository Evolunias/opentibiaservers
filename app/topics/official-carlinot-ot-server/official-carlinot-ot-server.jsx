import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-ot-server');
}

export default function OfficialCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-ot-server" />;
}
