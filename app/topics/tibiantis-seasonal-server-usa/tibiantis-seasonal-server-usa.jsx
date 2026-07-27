import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-usa');
}

export default function TibiantisSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-usa" />;
}
