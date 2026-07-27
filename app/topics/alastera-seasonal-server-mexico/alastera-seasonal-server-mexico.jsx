import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-mexico');
}

export default function AlasteraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-mexico" />;
}
