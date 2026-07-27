import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-seasonal-server');
}

export default function Noxiousot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-seasonal-server" />;
}
