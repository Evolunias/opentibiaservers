import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-uk');
}

export default function NostaltherSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-uk" />;
}
