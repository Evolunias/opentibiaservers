import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-germany');
}

export default function NepreniaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-germany" />;
}
