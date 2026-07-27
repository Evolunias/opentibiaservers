import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-ot-server');
}

export default function MiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-ot-server" />;
}
