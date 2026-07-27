import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-high-exp-server');
}

export default function Rubinot81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-high-exp-server" />;
}
