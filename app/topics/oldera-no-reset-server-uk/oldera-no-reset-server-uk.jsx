import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-uk');
}

export default function OlderaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-uk" />;
}
