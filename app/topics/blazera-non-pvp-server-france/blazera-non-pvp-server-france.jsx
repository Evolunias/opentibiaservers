import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-france');
}

export default function BlazeraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-france" />;
}
