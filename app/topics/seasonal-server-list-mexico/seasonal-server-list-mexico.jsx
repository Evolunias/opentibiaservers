import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-mexico');
}

export default function SeasonalServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-mexico" />;
}
