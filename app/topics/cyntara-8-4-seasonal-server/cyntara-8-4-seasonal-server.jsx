import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-seasonal-server');
}

export default function Cyntara84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-seasonal-server" />;
}
