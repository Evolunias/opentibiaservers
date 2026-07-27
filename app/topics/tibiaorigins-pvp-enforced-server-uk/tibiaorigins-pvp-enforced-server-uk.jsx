import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-uk');
}

export default function TibiaoriginsPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-uk" />;
}
