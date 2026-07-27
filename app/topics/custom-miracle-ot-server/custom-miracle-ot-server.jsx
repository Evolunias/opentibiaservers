import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-ot-server');
}

export default function CustomMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-ot-server" />;
}
