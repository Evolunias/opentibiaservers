import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-seasonal-server');
}

export default function Tibianus76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-seasonal-server" />;
}
