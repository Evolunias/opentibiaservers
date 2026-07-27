import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-low-exp-server');
}

export default function Rubinot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-low-exp-server" />;
}
