import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-seasonal-server');
}

export default function Cyntara81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-seasonal-server" />;
}
