import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-low-exp-server');
}

export default function Realera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-low-exp-server" />;
}
