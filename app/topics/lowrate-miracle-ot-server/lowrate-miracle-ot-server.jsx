import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-ot-server');
}

export default function LowrateMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-ot-server" />;
}
