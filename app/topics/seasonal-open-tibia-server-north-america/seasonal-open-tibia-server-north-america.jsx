import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-north-america');
}

export default function SeasonalOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-north-america" />;
}
