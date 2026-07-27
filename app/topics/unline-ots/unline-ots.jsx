import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-ots');
}

export default function UnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="unline-ots" />;
}
