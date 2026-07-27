import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-ots');
}

export default function TopYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-ots" />;
}
