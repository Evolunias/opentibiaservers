import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-high-exp-server');
}

export default function Rubinot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-high-exp-server" />;
}
