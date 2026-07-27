import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-seasonal-server');
}

export default function Oxygenot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-seasonal-server" />;
}
