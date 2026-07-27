import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-brazil');
}

export default function TibiantisNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-brazil" />;
}
