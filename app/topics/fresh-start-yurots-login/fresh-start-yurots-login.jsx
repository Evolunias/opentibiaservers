import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-login');
}

export default function FreshStartYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-login" />;
}
