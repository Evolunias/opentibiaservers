import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-latin-america');
}

export default function TibiascapePvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-latin-america" />;
}
