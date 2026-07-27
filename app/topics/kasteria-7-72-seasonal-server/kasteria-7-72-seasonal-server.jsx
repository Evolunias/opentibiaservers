import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-72-seasonal-server');
}

export default function Kasteria772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-72-seasonal-server" />;
}
