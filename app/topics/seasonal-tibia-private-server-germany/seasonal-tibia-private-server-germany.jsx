import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-germany');
}

export default function SeasonalTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-germany" />;
}
