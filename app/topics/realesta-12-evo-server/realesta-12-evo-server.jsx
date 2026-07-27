import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-evo-server');
}

export default function Realesta12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-evo-server" />;
}
