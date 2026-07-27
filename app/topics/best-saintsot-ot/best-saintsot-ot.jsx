import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-ot');
}

export default function BestSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-ot" />;
}
