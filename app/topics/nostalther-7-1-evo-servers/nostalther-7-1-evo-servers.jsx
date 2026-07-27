import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-evo-servers');
}

export default function Nostalther71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-evo-servers" />;
}
