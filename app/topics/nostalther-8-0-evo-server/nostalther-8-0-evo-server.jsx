import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-evo-server');
}

export default function Nostalther80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-evo-server" />;
}
