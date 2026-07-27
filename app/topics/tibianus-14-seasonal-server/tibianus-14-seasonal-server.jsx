import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-seasonal-server');
}

export default function Tibianus14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-seasonal-server" />;
}
