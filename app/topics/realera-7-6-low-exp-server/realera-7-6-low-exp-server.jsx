import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-low-exp-server');
}

export default function Realera76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-low-exp-server" />;
}
