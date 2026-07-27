import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-72-pvp-enforced-server');
}

export default function MistOfDeath772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-72-pvp-enforced-server" />;
}
