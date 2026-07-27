import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-latin-america');
}

export default function MistOfDeathPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-latin-america" />;
}
