import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-latin-america');
}

export default function TibiascapeNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-latin-america" />;
}
