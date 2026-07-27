import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-seasonal-server');
}

export default function Noxiousot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-seasonal-server" />;
}
