import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-low-exp-server');
}

export default function Rubinot84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-low-exp-server" />;
}
