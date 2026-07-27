import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-south-america');
}

export default function SeasonalTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-south-america" />;
}
