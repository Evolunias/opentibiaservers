import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-canada');
}

export default function OlderaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-canada" />;
}
