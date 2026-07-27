import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-seasonal-server');
}

export default function Noxiousot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-seasonal-server" />;
}
