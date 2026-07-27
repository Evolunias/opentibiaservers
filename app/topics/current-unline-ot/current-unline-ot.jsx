import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-ot');
}

export default function CurrentUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="current-unline-ot" />;
}
