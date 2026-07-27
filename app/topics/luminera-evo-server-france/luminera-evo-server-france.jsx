import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-france');
}

export default function LumineraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-france" />;
}
