import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-france');
}

export default function LumineraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-france" />;
}
