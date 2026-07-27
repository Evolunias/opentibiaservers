import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-france');
}

export default function AlasteraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-france" />;
}
