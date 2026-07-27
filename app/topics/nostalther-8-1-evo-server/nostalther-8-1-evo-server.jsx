import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-evo-server');
}

export default function Nostalther81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-evo-server" />;
}
