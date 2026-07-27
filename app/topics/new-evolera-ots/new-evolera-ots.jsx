import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-ots');
}

export default function NewEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-ots" />;
}
