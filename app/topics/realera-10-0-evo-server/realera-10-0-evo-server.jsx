import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-evo-server');
}

export default function Realera100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-evo-server" />;
}
