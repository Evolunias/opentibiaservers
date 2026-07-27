import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-mexico');
}

export default function TibiascapeNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-mexico" />;
}
