import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-seasonal-server');
}

export default function Tibianus11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-seasonal-server" />;
}
