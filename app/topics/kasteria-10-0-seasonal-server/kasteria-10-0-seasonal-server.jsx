import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-seasonal-server');
}

export default function Kasteria100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-seasonal-server" />;
}
