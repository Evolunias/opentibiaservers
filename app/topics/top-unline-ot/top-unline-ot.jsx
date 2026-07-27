import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-ot');
}

export default function TopUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="top-unline-ot" />;
}
