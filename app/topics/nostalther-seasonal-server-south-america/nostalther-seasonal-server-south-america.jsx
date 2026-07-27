import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-south-america');
}

export default function NostaltherSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-south-america" />;
}
