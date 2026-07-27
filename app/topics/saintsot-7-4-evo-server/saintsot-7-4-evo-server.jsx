import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-4-evo-server');
}

export default function Saintsot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-4-evo-server" />;
}
