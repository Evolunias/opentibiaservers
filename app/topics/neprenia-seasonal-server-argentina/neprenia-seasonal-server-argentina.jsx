import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-argentina');
}

export default function NepreniaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-argentina" />;
}
