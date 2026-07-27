import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-ot');
}

export default function PopularSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-ot" />;
}
