import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-poland');
}

export default function TibianusSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-poland" />;
}
