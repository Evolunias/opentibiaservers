import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-uk');
}

export default function NepreniaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-uk" />;
}
