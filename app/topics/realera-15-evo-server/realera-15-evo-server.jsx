import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-evo-server');
}

export default function Realera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-evo-server" />;
}
