import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria');
}

export default function ClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria" />;
}
