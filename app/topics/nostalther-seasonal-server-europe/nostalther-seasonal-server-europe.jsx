import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-europe');
}

export default function NostaltherSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-europe" />;
}
