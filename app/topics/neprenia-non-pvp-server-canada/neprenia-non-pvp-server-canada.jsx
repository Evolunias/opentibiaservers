import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-canada');
}

export default function NepreniaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-canada" />;
}
