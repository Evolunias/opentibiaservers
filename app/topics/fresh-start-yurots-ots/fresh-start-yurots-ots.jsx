import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-ots');
}

export default function FreshStartYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-ots" />;
}
