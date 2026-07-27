import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-latin-america');
}

export default function NepreniaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-latin-america" />;
}
