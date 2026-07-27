import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-seasonal-server');
}

export default function Realesta13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-seasonal-server" />;
}
