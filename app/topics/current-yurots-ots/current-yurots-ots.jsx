import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-ots');
}

export default function CurrentYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-ots" />;
}
