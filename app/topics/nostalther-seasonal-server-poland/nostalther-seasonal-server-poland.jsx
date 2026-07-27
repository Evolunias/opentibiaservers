import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-poland');
}

export default function NostaltherSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-poland" />;
}
