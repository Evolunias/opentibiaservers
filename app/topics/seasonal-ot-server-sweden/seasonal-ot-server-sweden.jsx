import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-sweden');
}

export default function SeasonalOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-sweden" />;
}
