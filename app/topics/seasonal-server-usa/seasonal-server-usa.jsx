import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-usa');
}

export default function SeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-usa" />;
}
