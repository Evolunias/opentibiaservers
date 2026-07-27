import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-seasonal-server');
}

export default function Imperianic100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-seasonal-server" />;
}
