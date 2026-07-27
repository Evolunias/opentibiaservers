import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-seasonal-server');
}

export default function Oxygenot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-seasonal-server" />;
}
