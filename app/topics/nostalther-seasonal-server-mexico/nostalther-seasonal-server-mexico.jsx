import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-mexico');
}

export default function NostaltherSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-mexico" />;
}
