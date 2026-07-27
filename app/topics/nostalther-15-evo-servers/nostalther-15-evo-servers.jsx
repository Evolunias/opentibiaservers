import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-evo-servers');
}

export default function Nostalther15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-evo-servers" />;
}
