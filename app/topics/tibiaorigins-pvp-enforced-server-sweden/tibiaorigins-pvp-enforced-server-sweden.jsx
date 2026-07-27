import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-sweden');
}

export default function TibiaoriginsPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-sweden" />;
}
