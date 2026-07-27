import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-usa');
}

export default function SeasonalOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-usa" />;
}
