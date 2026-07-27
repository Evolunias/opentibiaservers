import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-brazil');
}

export default function KasteriaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-brazil" />;
}
