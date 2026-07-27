import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-canada');
}

export default function MistOfDeathPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-canada" />;
}
