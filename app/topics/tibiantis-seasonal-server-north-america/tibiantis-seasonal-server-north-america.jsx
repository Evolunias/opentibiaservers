import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-north-america');
}

export default function TibiantisSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-north-america" />;
}
