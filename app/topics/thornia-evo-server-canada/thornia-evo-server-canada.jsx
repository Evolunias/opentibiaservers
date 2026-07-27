import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-canada');
}

export default function ThorniaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-canada" />;
}
