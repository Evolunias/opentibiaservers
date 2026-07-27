import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-evo-server');
}

export default function Saintsot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-evo-server" />;
}
