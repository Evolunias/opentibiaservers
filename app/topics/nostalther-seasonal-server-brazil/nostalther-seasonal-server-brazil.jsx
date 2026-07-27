import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-brazil');
}

export default function NostaltherSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-brazil" />;
}
