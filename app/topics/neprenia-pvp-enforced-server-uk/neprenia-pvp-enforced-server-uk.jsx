import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-uk');
}

export default function NepreniaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-uk" />;
}
