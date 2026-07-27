import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-mexico');
}

export default function MistOfDeathPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-mexico" />;
}
