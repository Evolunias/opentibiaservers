import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-france');
}

export default function TibiantisNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-france" />;
}
