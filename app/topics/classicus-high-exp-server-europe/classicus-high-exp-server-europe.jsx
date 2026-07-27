import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-europe');
}

export default function ClassicusHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-europe" />;
}
