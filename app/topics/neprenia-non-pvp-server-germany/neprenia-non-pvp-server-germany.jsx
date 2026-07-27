import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-germany');
}

export default function NepreniaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-germany" />;
}
