import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-evo-server');
}

export default function Nostalther74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-evo-server" />;
}
