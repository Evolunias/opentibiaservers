import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-evo-server');
}

export default function Nostalther14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-evo-server" />;
}
