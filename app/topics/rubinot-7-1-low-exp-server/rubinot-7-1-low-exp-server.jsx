import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-low-exp-server');
}

export default function Rubinot71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-low-exp-server" />;
}
