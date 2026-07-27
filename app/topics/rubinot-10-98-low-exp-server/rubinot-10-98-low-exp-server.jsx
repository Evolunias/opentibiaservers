import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-low-exp-server');
}

export default function Rubinot1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-low-exp-server" />;
}
