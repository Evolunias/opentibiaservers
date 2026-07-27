import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-6-evo-server');
}

export default function Saintsot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-6-evo-server" />;
}
