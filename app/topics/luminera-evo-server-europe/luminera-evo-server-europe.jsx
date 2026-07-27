import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-europe');
}

export default function LumineraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-europe" />;
}
