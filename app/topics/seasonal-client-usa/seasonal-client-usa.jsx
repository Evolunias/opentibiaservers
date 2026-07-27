import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-usa');
}

export default function SeasonalClientUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-usa" />;
}
