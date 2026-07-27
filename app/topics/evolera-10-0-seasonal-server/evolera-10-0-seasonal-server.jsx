import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-seasonal-server');
}

export default function Evolera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-seasonal-server" />;
}
