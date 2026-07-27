import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-seasonal-server');
}

export default function Noxiousot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-seasonal-server" />;
}
