import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera');
}

export default function ActiveEvoleraKeywordPage() {
  return <StaticKeywordPage slug="active-evolera" />;
}
