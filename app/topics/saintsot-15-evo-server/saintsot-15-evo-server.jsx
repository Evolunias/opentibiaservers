import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-evo-server');
}

export default function Saintsot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-evo-server" />;
}
