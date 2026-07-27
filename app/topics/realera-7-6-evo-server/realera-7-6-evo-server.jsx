import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-evo-server');
}

export default function Realera76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-evo-server" />;
}
