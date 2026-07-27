import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-seasonal-server');
}

export default function Cyntara74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-seasonal-server" />;
}
