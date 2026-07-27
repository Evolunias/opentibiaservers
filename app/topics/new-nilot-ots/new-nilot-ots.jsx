import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-ots');
}

export default function NewNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-ots" />;
}
