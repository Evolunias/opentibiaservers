import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-ots');
}

export default function NilotOtsKeywordPage() {
  return <StaticKeywordPage slug="nilot-ots" />;
}
