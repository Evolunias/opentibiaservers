import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-north-america');
}

export default function TibiaoriginsPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-north-america" />;
}
