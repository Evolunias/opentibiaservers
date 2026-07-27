import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-seasonal-server');
}

export default function Cyntara13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-seasonal-server" />;
}
