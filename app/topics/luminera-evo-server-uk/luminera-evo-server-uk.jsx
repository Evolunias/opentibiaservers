import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-uk');
}

export default function LumineraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-uk" />;
}
