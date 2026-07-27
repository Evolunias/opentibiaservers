import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-argentina');
}

export default function SeasonalServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-argentina" />;
}
