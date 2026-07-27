import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-seasonal-server');
}

export default function Kasteria71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-seasonal-server" />;
}
