import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-ots');
}

export default function NewThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-ots" />;
}
