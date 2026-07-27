import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-high-exp-server');
}

export default function Rubinot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-high-exp-server" />;
}
