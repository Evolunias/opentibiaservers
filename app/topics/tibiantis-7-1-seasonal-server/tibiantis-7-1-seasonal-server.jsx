import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-seasonal-server');
}

export default function Tibiantis71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-seasonal-server" />;
}
