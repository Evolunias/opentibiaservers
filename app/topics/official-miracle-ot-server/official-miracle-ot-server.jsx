import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-ot-server');
}

export default function OfficialMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-ot-server" />;
}
