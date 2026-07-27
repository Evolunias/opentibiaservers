import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-france');
}

export default function SeasonalOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-france" />;
}
