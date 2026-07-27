import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-brazil');
}

export default function AlasteraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-brazil" />;
}
