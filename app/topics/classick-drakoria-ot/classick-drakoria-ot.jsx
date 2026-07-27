import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-ot');
}

export default function ClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-ot" />;
}
