import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-seasonal-server');
}

export default function Imperianic12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-seasonal-server" />;
}
