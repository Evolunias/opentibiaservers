import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-north-america');
}

export default function SeasonalTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-north-america" />;
}
