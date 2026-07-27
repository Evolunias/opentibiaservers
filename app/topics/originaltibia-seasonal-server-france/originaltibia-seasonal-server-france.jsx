import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-france');
}

export default function OriginaltibiaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-france" />;
}
