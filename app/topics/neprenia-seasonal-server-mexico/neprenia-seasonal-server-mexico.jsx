import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-mexico');
}

export default function NepreniaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-mexico" />;
}
