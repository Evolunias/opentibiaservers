import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-servers-usa');
}

export default function LumineraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-servers-usa" />;
}
