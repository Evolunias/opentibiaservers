import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-europe');
}

export default function ClassicusLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-europe" />;
}
