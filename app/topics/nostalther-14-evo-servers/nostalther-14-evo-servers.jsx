import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-evo-servers');
}

export default function Nostalther14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-evo-servers" />;
}
