import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-seasonal-server');
}

export default function Tibianus84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-seasonal-server" />;
}
