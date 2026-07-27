import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-argentina');
}

export default function LumineraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-argentina" />;
}
