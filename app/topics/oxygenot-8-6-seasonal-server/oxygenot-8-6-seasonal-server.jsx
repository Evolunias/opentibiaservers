import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-seasonal-server');
}

export default function Oxygenot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-seasonal-server" />;
}
