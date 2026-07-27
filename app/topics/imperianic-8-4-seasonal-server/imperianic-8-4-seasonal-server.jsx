import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-seasonal-server');
}

export default function Imperianic84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-seasonal-server" />;
}
