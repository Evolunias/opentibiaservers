import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-usa');
}

export default function SeasonalServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-usa" />;
}
