import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-france');
}

export default function SeasonalOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-france" />;
}
