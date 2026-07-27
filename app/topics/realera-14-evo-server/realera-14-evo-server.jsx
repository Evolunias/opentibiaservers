import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-evo-server');
}

export default function Realera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-evo-server" />;
}
