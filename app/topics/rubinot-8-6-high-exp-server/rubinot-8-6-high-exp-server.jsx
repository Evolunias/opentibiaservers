import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-high-exp-server');
}

export default function Rubinot86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-high-exp-server" />;
}
