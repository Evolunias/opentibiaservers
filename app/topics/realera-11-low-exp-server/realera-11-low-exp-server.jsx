import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-low-exp-server');
}

export default function Realera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-low-exp-server" />;
}
