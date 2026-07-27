import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-france');
}

export default function TibianusSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-france" />;
}
