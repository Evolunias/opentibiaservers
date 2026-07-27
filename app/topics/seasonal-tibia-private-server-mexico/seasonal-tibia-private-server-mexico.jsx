import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-mexico');
}

export default function SeasonalTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-mexico" />;
}
