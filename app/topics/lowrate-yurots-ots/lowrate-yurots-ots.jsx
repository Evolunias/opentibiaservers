import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-ots');
}

export default function LowrateYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-ots" />;
}
