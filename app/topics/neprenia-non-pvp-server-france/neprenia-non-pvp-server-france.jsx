import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-france');
}

export default function NepreniaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-france" />;
}
