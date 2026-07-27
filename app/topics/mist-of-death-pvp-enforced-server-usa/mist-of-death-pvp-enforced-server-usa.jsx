import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-usa');
}

export default function MistOfDeathPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-usa" />;
}
