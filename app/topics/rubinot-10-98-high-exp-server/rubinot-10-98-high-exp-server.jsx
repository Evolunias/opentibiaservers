import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-high-exp-server');
}

export default function Rubinot1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-high-exp-server" />;
}
