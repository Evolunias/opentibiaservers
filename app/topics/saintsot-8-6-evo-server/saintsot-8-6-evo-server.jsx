import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-evo-server');
}

export default function Saintsot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-evo-server" />;
}
