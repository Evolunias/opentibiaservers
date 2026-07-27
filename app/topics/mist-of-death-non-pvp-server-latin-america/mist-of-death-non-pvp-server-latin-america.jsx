import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-latin-america');
}

export default function MistOfDeathNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-latin-america" />;
}
