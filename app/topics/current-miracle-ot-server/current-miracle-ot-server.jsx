import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-ot-server');
}

export default function CurrentMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-ot-server" />;
}
