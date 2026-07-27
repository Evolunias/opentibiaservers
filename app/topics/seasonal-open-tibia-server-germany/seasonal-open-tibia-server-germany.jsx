import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-germany');
}

export default function SeasonalOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-germany" />;
}
