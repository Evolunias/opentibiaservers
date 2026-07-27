import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-uk');
}

export default function AlasteraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-uk" />;
}
