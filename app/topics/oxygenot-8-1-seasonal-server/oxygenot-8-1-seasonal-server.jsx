import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-seasonal-server');
}

export default function Oxygenot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-seasonal-server" />;
}
