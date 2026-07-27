import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-low-exp-server');
}

export default function Rubinot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-low-exp-server" />;
}
