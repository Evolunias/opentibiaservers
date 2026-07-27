import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-seasonal-server');
}

export default function Imperianic81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-seasonal-server" />;
}
