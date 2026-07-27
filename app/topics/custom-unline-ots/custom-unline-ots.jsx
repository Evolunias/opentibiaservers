import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-ots');
}

export default function CustomUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-ots" />;
}
