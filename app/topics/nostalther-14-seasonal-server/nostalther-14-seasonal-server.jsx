import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-seasonal-server');
}

export default function Nostalther14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-seasonal-server" />;
}
