import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-brazil');
}

export default function NepreniaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-brazil" />;
}
