import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-brazil');
}

export default function ThorniaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-brazil" />;
}
