import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-evo-server');
}

export default function Nostalther11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-evo-server" />;
}
