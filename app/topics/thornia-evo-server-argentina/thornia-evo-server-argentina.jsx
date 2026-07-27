import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-argentina');
}

export default function ThorniaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-argentina" />;
}
