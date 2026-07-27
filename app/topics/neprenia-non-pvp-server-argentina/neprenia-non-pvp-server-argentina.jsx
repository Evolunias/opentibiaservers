import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-argentina');
}

export default function NepreniaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-argentina" />;
}
