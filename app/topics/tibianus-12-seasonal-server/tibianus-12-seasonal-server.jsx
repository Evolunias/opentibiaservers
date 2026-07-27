import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-seasonal-server');
}

export default function Tibianus12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-seasonal-server" />;
}
