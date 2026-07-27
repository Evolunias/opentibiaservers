import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-evo-servers');
}

export default function Saintsot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-evo-servers" />;
}
