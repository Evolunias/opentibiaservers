import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-seasonal-server');
}

export default function Tibianus854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-seasonal-server" />;
}
