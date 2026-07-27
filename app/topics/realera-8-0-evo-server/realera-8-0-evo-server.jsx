import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-evo-server');
}

export default function Realera80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-evo-server" />;
}
