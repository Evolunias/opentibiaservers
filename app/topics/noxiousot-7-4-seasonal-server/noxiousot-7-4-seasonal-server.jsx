import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-seasonal-server');
}

export default function Noxiousot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-seasonal-server" />;
}
