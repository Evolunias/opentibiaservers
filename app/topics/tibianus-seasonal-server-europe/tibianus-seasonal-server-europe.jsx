import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-europe');
}

export default function TibianusSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-europe" />;
}
