import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-canada');
}

export default function TibiaoriginsPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-canada" />;
}
