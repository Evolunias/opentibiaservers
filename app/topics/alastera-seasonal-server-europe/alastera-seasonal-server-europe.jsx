import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-europe');
}

export default function AlasteraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-europe" />;
}
