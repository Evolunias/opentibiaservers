import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-seasonal-server');
}

export default function Oxygenot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-seasonal-server" />;
}
