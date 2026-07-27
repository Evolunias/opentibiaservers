import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-ots');
}

export default function FreshStartNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-ots" />;
}
