import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-seasonal-server');
}

export default function Kasteria1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-seasonal-server" />;
}
