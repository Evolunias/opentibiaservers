import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-evo-server');
}

export default function Nostalther84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-evo-server" />;
}
