import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-evo-server');
}

export default function Nostalther71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-evo-server" />;
}
