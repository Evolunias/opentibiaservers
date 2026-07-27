import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-evo-server');
}

export default function Realera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-evo-server" />;
}
