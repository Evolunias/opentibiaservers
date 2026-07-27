import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-seasonal-server');
}

export default function Alastera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-seasonal-server" />;
}
