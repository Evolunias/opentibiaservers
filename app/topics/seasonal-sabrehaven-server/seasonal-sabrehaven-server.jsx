import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-sabrehaven-server');
}

export default function SeasonalSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-sabrehaven-server" />;
}
