import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-germany');
}

export default function MistOfDeathPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-germany" />;
}
