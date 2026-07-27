import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-ots');
}

export default function CurrentNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-ots" />;
}
