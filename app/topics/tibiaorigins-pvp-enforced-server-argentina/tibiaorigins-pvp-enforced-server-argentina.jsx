import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-argentina');
}

export default function TibiaoriginsPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-argentina" />;
}
