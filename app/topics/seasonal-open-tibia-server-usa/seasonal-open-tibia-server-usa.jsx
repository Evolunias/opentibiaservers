import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-usa');
}

export default function SeasonalOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-usa" />;
}
