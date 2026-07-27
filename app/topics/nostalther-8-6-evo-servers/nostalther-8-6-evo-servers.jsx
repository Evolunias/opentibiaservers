import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-evo-servers');
}

export default function Nostalther86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-evo-servers" />;
}
