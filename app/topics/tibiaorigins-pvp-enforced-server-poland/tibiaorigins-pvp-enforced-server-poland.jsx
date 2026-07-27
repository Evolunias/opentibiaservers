import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-poland');
}

export default function TibiaoriginsPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-poland" />;
}
