import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-ot');
}

export default function CurrentYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-ot" />;
}
