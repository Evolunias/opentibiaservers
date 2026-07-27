import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-seasonal-server');
}

export default function Oxygenot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-seasonal-server" />;
}
