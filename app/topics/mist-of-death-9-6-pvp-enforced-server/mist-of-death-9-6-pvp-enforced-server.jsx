import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-9-6-pvp-enforced-server');
}

export default function MistOfDeath96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-9-6-pvp-enforced-server" />;
}
