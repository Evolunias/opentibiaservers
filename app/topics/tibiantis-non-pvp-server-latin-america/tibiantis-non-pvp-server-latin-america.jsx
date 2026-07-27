import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-latin-america');
}

export default function TibiantisNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-latin-america" />;
}
