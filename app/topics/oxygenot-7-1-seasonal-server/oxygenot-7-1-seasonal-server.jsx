import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-seasonal-server');
}

export default function Oxygenot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-seasonal-server" />;
}
