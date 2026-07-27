import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-poland');
}

export default function NepreniaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-poland" />;
}
