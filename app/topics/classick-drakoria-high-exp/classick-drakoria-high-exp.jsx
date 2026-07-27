import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-high-exp');
}

export default function ClassickDrakoriaHighExpKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-high-exp" />;
}
