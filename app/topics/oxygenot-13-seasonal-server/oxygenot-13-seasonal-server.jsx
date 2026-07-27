import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-seasonal-server');
}

export default function Oxygenot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-seasonal-server" />;
}
