import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-seasonal-server');
}

export default function Noxiousot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-seasonal-server" />;
}
