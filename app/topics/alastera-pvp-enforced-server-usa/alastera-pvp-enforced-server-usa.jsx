import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-usa');
}

export default function AlasteraPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-usa" />;
}
