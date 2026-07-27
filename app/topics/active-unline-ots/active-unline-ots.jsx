import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-ots');
}

export default function ActiveUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="active-unline-ots" />;
}
