import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-seasonal-server');
}

export default function Imperianic80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-seasonal-server" />;
}
