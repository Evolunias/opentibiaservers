import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots');
}

export default function CurrentYurotsKeywordPage() {
  return <StaticKeywordPage slug="current-yurots" />;
}
