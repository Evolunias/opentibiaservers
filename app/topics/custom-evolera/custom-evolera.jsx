import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera');
}

export default function CustomEvoleraKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera" />;
}
