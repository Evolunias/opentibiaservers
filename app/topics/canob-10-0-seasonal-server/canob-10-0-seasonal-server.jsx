import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-seasonal-server');
}

export default function Canob100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-seasonal-server" />;
}
