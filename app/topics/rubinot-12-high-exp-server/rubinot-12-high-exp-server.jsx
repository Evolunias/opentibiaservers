import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-high-exp-server');
}

export default function Rubinot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-high-exp-server" />;
}
