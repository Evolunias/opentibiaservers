import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-seasonal-server');
}

export default function Canob86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-seasonal-server" />;
}
