import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-ots');
}

export default function NewYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-ots" />;
}
