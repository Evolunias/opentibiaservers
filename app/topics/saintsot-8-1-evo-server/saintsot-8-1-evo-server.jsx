import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-evo-server');
}

export default function Saintsot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-evo-server" />;
}
