import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-low-exp-server');
}

export default function Realera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-low-exp-server" />;
}
