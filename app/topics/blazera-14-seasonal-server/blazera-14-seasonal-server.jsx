import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-seasonal-server');
}

export default function Blazera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-seasonal-server" />;
}
