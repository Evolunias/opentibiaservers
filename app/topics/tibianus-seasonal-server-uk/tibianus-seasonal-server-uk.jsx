import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-uk');
}

export default function TibianusSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-uk" />;
}
