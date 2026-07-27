import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera');
}

export default function NewEvoleraKeywordPage() {
  return <StaticKeywordPage slug="new-evolera" />;
}
