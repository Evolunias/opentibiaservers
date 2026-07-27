import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-ots');
}

export default function CustomEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-ots" />;
}
