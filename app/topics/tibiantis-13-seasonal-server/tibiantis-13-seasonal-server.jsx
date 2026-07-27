import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-seasonal-server');
}

export default function Tibiantis13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-seasonal-server" />;
}
