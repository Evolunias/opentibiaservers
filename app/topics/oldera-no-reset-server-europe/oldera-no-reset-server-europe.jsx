import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-europe');
}

export default function OlderaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-europe" />;
}
