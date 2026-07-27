import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-south-america');
}

export default function NepreniaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-south-america" />;
}
