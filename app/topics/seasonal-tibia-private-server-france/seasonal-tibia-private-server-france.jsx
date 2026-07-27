import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-france');
}

export default function SeasonalTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-france" />;
}
