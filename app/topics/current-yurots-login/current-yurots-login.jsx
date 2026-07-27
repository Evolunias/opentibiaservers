import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-login');
}

export default function CurrentYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-login" />;
}
