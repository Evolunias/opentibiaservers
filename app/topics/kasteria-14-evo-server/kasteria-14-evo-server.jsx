import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-evo-server');
}

export default function Kasteria14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-evo-server" />;
}
