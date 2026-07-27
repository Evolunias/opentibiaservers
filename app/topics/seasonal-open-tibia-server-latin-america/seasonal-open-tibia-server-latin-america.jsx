import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-latin-america');
}

export default function SeasonalOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-latin-america" />;
}
