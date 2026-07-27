import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-north-america');
}

export default function NepreniaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-north-america" />;
}
