import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-brazil');
}

export default function UnlineNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-brazil" />;
}
