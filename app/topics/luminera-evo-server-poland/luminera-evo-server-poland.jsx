import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-poland');
}

export default function LumineraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-poland" />;
}
