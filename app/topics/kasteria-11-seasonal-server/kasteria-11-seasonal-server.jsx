import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-seasonal-server');
}

export default function Kasteria11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-seasonal-server" />;
}
