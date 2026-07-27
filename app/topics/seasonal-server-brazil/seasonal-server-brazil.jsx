import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-brazil');
}

export default function SeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-brazil" />;
}
