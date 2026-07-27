import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-server');
}

export default function OfficialCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-server" />;
}
