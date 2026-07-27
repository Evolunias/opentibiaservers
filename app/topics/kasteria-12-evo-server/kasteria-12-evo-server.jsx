import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-evo-server');
}

export default function Kasteria12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-evo-server" />;
}
