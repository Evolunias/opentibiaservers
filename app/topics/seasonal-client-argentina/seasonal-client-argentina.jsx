import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-argentina');
}

export default function SeasonalClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-argentina" />;
}
