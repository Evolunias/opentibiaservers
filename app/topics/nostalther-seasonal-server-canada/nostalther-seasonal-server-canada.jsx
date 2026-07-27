import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-canada');
}

export default function NostaltherSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-canada" />;
}
