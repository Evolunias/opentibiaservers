import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-low-exp-server');
}

export default function Realera74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-low-exp-server" />;
}
