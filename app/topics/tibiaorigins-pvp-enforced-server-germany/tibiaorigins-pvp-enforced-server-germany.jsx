import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-germany');
}

export default function TibiaoriginsPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-germany" />;
}
