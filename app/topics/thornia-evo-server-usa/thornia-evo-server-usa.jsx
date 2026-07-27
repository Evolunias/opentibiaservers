import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-usa');
}

export default function ThorniaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-usa" />;
}
