import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-ots');
}

export default function TopNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-ots" />;
}
