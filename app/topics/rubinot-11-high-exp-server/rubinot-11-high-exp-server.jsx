import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-high-exp-server');
}

export default function Rubinot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-high-exp-server" />;
}
