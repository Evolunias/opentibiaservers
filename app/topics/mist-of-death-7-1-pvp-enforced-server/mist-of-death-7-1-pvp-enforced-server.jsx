import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-pvp-enforced-server');
}

export default function MistOfDeath71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-pvp-enforced-server" />;
}
