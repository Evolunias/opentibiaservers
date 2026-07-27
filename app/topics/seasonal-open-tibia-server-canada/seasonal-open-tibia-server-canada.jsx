import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-canada');
}

export default function SeasonalOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-canada" />;
}
