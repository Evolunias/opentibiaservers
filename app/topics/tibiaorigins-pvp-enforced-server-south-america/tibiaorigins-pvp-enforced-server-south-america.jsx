import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-south-america');
}

export default function TibiaoriginsPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-south-america" />;
}
