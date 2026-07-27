import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-sweden');
}

export default function MistOfDeathPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-sweden" />;
}
