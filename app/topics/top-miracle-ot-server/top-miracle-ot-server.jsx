import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-ot-server');
}

export default function TopMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-ot-server" />;
}
