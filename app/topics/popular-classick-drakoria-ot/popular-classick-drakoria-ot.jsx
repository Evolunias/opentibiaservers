import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-ot');
}

export default function PopularClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-ot" />;
}
