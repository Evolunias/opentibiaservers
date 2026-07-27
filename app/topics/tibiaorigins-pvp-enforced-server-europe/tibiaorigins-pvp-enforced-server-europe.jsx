import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-europe');
}

export default function TibiaoriginsPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-europe" />;
}
