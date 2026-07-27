import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-seasonal-server');
}

export default function Tibianus96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-seasonal-server" />;
}
