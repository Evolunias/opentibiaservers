import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-seasonal-server');
}

export default function Noxiousot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-seasonal-server" />;
}
