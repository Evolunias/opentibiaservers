import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-north-america');
}

export default function ThorniaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-north-america" />;
}
