import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-south-america');
}

export default function CoxaotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-south-america" />;
}
