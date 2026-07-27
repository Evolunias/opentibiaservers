import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-brazil');
}

export default function NepreniaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-brazil" />;
}
