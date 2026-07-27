import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-high-exp-server');
}

export default function Rubinot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-high-exp-server" />;
}
