import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-login');
}

export default function TopYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-login" />;
}
