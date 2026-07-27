import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-seasonal-server');
}

export default function Tibiantis100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-seasonal-server" />;
}
