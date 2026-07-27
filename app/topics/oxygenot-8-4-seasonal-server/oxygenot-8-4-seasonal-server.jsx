import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-seasonal-server');
}

export default function Oxygenot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-seasonal-server" />;
}
