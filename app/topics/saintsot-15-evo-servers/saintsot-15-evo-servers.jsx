import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-evo-servers');
}

export default function Saintsot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-evo-servers" />;
}
