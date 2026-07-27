import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-low-exp-server');
}

export default function Rubinot854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-low-exp-server" />;
}
