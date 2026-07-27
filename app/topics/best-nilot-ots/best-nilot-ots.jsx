import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-ots');
}

export default function BestNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-ots" />;
}
