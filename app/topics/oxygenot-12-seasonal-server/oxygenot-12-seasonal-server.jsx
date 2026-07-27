import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-seasonal-server');
}

export default function Oxygenot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-seasonal-server" />;
}
