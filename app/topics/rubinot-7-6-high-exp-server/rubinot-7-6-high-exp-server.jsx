import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-high-exp-server');
}

export default function Rubinot76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-high-exp-server" />;
}
