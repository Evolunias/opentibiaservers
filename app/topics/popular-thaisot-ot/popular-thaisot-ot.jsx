import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-ot');
}

export default function PopularThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-ot" />;
}
