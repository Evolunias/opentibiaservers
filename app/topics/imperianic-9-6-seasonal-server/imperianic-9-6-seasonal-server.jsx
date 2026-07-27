import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-seasonal-server');
}

export default function Imperianic96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-seasonal-server" />;
}
