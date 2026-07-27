import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-ot');
}

export default function CurrentEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-ot" />;
}
