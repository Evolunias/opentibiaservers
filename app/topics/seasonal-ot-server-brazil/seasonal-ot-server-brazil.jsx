import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-brazil');
}

export default function SeasonalOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-brazil" />;
}
