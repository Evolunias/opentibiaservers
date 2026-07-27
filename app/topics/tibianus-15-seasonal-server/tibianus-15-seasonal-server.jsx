import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-seasonal-server');
}

export default function Tibianus15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-seasonal-server" />;
}
