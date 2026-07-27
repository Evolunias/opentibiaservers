import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-brazil');
}

export default function TibiameNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-brazil" />;
}
