import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-evo-server');
}

export default function Nostalther15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-evo-server" />;
}
