import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-latin-america');
}

export default function CoxaotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-latin-america" />;
}
