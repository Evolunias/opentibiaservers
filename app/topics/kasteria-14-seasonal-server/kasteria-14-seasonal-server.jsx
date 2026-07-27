import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-seasonal-server');
}

export default function Kasteria14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-seasonal-server" />;
}
