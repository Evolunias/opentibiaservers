import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-usa');
}

export default function LumineraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-usa" />;
}
