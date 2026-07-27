import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-seasonal-server');
}

export default function Canob74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-seasonal-server" />;
}
