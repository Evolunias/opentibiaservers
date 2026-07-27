import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-seasonal-server');
}

export default function Canob96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-seasonal-server" />;
}
