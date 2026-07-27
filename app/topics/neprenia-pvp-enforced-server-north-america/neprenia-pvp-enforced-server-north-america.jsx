import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-north-america');
}

export default function NepreniaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-north-america" />;
}
