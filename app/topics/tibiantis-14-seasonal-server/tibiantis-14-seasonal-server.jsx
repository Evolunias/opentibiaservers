import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-seasonal-server');
}

export default function Tibiantis14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-seasonal-server" />;
}
