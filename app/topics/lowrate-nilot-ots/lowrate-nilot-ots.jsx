import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-ots');
}

export default function LowrateNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-ots" />;
}
