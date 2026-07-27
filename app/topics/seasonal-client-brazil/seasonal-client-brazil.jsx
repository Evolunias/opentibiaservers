import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-brazil');
}

export default function SeasonalClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-brazil" />;
}
