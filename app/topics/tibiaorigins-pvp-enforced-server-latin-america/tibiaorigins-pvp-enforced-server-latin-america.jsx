import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-latin-america');
}

export default function TibiaoriginsPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-latin-america" />;
}
