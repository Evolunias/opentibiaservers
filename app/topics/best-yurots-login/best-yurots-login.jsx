import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-login');
}

export default function BestYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-login" />;
}
