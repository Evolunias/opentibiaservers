import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-low-exp-server');
}

export default function Rubinot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-low-exp-server" />;
}
