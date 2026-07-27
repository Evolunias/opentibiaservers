import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-south-america');
}

export default function SeasonalOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-south-america" />;
}
