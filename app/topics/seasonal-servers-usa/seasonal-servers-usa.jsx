import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-usa');
}

export default function SeasonalServersUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-usa" />;
}
