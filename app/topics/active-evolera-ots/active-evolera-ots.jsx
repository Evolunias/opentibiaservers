import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-ots');
}

export default function ActiveEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-ots" />;
}
