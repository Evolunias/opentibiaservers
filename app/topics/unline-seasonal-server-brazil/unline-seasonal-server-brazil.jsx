import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-brazil');
}

export default function UnlineSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-brazil" />;
}
