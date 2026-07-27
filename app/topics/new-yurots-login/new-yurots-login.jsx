import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-login');
}

export default function NewYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-login" />;
}
