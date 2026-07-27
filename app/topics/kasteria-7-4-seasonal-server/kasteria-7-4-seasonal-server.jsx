import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-seasonal-server');
}

export default function Kasteria74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-seasonal-server" />;
}
