import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-seasonal-server');
}

export default function Noxiousot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-seasonal-server" />;
}
