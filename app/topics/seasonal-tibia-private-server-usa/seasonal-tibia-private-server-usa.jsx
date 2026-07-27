import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-usa');
}

export default function SeasonalTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-usa" />;
}
