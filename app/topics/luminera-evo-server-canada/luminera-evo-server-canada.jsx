import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-canada');
}

export default function LumineraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-canada" />;
}
