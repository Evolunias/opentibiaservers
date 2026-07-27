import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-france');
}

export default function NepreniaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-france" />;
}
