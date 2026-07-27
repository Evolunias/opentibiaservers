import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-poland');
}

export default function OlderaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-poland" />;
}
