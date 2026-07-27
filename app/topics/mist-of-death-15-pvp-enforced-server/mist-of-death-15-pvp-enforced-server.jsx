import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-pvp-enforced-server');
}

export default function MistOfDeath15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-pvp-enforced-server" />;
}
