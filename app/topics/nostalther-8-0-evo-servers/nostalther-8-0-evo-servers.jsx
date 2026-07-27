import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-evo-servers');
}

export default function Nostalther80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-evo-servers" />;
}
