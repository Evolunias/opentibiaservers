import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-mexico');
}

export default function TibiantisSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-mexico" />;
}
