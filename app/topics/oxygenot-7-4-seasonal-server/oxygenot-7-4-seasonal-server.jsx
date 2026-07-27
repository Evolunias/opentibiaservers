import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-seasonal-server');
}

export default function Oxygenot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-seasonal-server" />;
}
