import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-54-seasonal-server');
}

export default function Cyntara854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-54-seasonal-server" />;
}
