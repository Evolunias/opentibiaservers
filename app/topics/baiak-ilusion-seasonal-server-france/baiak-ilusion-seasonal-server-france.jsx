import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-france');
}

export default function BaiakIlusionSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-france" />;
}
