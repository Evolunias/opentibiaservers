import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-pvp-enforced-server');
}

export default function MistOfDeath1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-pvp-enforced-server" />;
}
