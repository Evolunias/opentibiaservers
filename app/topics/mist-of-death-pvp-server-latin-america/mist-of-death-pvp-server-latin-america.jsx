import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-latin-america');
}

export default function MistOfDeathPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-latin-america" />;
}
