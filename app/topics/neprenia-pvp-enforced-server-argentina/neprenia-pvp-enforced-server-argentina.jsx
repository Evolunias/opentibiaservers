import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-argentina');
}

export default function NepreniaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-argentina" />;
}
