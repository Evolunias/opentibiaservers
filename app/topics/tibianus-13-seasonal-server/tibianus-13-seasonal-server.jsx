import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-seasonal-server');
}

export default function Tibianus13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-seasonal-server" />;
}
