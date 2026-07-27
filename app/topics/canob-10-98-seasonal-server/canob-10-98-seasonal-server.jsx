import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-seasonal-server');
}

export default function Canob1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-seasonal-server" />;
}
