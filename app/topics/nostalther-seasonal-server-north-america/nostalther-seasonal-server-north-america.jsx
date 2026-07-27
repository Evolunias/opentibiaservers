import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-north-america');
}

export default function NostaltherSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-north-america" />;
}
