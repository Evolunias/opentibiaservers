import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-ot');
}

export default function PopularUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-ot" />;
}
