import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-seasonal-server');
}

export default function Tibiantis80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-seasonal-server" />;
}
