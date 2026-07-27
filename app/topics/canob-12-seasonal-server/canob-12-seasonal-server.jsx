import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-seasonal-server');
}

export default function Canob12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-seasonal-server" />;
}
