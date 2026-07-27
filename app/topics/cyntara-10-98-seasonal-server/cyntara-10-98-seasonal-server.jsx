import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-seasonal-server');
}

export default function Cyntara1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-seasonal-server" />;
}
