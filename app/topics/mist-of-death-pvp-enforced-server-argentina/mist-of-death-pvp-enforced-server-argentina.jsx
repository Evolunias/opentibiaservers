import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-argentina');
}

export default function MistOfDeathPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-argentina" />;
}
