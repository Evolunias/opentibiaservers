import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-argentina');
}

export default function TibianusSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-argentina" />;
}
