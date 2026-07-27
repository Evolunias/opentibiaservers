import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-servers-usa');
}

export default function ArcaniarlEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-servers-usa" />;
}
