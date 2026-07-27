import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-usa');
}

export default function OlderaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-usa" />;
}
