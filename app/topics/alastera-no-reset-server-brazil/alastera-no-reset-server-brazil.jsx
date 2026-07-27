import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-brazil');
}

export default function AlasteraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-brazil" />;
}
