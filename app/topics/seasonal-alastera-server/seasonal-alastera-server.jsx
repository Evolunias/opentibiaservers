import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-alastera-server');
}

export default function SeasonalAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-alastera-server" />;
}
