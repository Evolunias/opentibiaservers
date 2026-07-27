import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-usa');
}

export default function NepreniaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-usa" />;
}
