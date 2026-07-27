import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-seasonal-server');
}

export default function Kasteria76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-seasonal-server" />;
}
