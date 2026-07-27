import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-ot');
}

export default function BestClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-ot" />;
}
