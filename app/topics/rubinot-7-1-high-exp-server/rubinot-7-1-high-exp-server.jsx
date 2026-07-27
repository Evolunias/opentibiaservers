import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-high-exp-server');
}

export default function Rubinot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-high-exp-server" />;
}
