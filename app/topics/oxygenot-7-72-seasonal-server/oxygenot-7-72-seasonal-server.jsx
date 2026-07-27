import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-seasonal-server');
}

export default function Oxygenot772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-seasonal-server" />;
}
