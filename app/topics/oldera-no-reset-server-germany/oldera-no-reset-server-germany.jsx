import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-germany');
}

export default function OlderaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-germany" />;
}
