import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-seasonal-server');
}

export default function Kasteria15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-seasonal-server" />;
}
