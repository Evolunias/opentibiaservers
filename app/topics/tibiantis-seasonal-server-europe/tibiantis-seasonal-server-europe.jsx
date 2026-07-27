import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-europe');
}

export default function TibiantisSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-europe" />;
}
