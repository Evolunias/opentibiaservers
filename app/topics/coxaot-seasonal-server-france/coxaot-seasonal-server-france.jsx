import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-france');
}

export default function CoxaotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-france" />;
}
