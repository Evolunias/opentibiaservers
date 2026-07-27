import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-seasonal-server');
}

export default function Oxygenot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-seasonal-server" />;
}
