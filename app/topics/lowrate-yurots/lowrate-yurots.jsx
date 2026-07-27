import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots');
}

export default function LowrateYurotsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots" />;
}
