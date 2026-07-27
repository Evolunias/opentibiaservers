import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-france');
}

export default function AureraGlobalNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-france" />;
}
