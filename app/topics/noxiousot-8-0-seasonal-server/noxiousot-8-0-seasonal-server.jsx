import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-seasonal-server');
}

export default function Noxiousot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-seasonal-server" />;
}
