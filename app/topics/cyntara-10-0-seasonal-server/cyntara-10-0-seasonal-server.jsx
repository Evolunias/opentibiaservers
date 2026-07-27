import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-seasonal-server');
}

export default function Cyntara100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-seasonal-server" />;
}
