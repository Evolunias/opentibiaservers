import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-low-exp-server');
}

export default function Rubinot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-low-exp-server" />;
}
