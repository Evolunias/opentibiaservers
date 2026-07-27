import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-south-america');
}

export default function NepreniaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-south-america" />;
}
