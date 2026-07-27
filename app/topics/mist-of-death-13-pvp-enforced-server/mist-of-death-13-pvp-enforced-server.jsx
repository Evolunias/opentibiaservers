import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-pvp-enforced-server');
}

export default function MistOfDeath13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-pvp-enforced-server" />;
}
