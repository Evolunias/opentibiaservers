import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-evo-server');
}

export default function Realera71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-evo-server" />;
}
