import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-europe');
}

export default function NepreniaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-europe" />;
}
