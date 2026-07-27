import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-uk');
}

export default function AlasteraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-uk" />;
}
