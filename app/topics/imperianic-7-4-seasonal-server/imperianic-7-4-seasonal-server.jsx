import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-seasonal-server');
}

export default function Imperianic74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-seasonal-server" />;
}
