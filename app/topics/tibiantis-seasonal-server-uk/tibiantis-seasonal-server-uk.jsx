import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-uk');
}

export default function TibiantisSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-uk" />;
}
