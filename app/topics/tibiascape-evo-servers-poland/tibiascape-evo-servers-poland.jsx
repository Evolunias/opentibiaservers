import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-servers-poland');
}

export default function TibiascapeEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-servers-poland" />;
}
