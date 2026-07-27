import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-evo-server');
}

export default function Nostalther86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-evo-server" />;
}
