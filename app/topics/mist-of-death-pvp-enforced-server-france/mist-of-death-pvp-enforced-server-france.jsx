import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-france');
}

export default function MistOfDeathPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-france" />;
}
