import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-brazil');
}

export default function OlderaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-brazil" />;
}
