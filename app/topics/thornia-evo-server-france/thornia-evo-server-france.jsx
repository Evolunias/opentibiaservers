import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-france');
}

export default function ThorniaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-france" />;
}
