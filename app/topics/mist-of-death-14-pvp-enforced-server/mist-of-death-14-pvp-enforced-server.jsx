import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-pvp-enforced-server');
}

export default function MistOfDeath14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-pvp-enforced-server" />;
}
