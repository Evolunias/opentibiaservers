import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-brazil');
}

export default function ElderaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-brazil" />;
}
