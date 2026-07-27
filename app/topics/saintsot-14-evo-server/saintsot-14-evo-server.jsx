import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-evo-server');
}

export default function Saintsot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-evo-server" />;
}
