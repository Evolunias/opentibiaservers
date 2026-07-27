import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-evo-servers');
}

export default function Saintsot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-evo-servers" />;
}
