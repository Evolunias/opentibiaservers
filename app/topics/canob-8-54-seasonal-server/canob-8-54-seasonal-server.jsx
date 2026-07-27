import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-seasonal-server');
}

export default function Canob854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-seasonal-server" />;
}
