import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-seasonal-server');
}

export default function Cyntara14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-seasonal-server" />;
}
