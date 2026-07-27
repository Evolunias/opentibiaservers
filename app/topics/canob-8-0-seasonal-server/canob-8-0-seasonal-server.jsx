import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-seasonal-server');
}

export default function Canob80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-seasonal-server" />;
}
