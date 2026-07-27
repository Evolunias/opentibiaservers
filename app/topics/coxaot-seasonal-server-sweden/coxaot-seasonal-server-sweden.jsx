import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-sweden');
}

export default function CoxaotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-sweden" />;
}
