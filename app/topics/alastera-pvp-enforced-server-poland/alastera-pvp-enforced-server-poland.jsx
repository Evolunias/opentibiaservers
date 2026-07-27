import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-poland');
}

export default function AlasteraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-poland" />;
}
