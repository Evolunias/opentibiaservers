import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-seasonal-server');
}

export default function Imperianic13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-seasonal-server" />;
}
