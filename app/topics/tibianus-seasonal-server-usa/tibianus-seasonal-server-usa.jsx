import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-usa');
}

export default function TibianusSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-usa" />;
}
