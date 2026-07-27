import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-high-exp-server');
}

export default function Rubinot772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-high-exp-server" />;
}
