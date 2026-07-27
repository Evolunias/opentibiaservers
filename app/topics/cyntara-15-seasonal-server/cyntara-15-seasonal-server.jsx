import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-seasonal-server');
}

export default function Cyntara15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-seasonal-server" />;
}
