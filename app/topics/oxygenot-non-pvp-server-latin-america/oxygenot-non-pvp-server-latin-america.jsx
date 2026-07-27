import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-latin-america');
}

export default function OxygenotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-latin-america" />;
}
