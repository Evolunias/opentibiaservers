import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-servers-poland');
}

export default function LumineraEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-servers-poland" />;
}
