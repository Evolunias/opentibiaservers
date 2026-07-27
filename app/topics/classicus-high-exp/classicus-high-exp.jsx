import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp');
}

export default function ClassicusHighExpKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp" />;
}
