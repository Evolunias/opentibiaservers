import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-north-america');
}

export default function LumineraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-north-america" />;
}
