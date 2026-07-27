import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-evo-server');
}

export default function Realera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-evo-server" />;
}
