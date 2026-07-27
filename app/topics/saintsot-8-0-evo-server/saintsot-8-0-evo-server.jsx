import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-evo-server');
}

export default function Saintsot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-evo-server" />;
}
