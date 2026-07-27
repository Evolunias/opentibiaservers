import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-seasonal-server');
}

export default function Imperianic11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-seasonal-server" />;
}
