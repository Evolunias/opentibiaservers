import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-evo-server');
}

export default function Saintsot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-evo-server" />;
}
