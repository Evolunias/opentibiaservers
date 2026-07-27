import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-ots');
}

export default function CurrentOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-ots" />;
}
