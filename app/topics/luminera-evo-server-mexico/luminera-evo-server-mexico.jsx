import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-mexico');
}

export default function LumineraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-mexico" />;
}
