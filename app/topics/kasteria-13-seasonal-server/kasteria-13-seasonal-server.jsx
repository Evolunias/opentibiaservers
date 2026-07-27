import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-seasonal-server');
}

export default function Kasteria13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-seasonal-server" />;
}
