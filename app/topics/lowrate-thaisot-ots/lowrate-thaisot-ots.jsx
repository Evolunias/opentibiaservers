import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-ots');
}

export default function LowrateThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-ots" />;
}
