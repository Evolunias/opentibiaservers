import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-germany');
}

export default function NostaltherSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-germany" />;
}
