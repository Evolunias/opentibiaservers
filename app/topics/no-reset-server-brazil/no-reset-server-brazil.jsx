import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-brazil');
}

export default function NoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-brazil" />;
}
