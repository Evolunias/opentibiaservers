import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-seasonal-server');
}

export default function Kasteria12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-seasonal-server" />;
}
