import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-seasonal-server');
}

export default function Canob15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-seasonal-server" />;
}
