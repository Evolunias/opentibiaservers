import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-seasonal-server');
}

export default function Noxiousot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-seasonal-server" />;
}
