import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-usa');
}

export default function NepreniaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-usa" />;
}
