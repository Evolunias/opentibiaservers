import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-france');
}

export default function TibiaoriginsPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-france" />;
}
