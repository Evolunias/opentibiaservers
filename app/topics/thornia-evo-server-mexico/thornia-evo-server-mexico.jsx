import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-mexico');
}

export default function ThorniaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-mexico" />;
}
