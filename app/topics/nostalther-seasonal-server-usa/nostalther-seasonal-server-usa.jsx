import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-usa');
}

export default function NostaltherSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-usa" />;
}
