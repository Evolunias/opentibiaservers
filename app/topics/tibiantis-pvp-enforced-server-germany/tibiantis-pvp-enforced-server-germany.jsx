import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-germany');
}

export default function TibiantisPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-germany" />;
}
