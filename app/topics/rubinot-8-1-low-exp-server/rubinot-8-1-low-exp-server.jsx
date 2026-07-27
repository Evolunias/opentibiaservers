import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-low-exp-server');
}

export default function Rubinot81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-low-exp-server" />;
}
