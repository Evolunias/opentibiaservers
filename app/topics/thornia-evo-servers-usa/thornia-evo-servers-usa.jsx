import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-servers-usa');
}

export default function ThorniaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-servers-usa" />;
}
