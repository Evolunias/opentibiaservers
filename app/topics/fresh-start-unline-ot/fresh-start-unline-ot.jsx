import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-ot');
}

export default function FreshStartUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-ot" />;
}
