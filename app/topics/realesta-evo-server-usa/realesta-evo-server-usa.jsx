import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-usa');
}

export default function RealestaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-usa" />;
}
