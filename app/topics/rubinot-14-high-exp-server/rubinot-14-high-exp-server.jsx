import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-high-exp-server');
}

export default function Rubinot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-high-exp-server" />;
}
