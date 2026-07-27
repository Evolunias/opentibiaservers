import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-high-exp-server');
}

export default function Realera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-high-exp-server" />;
}
