import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-mexico');
}

export default function TibijkaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-mexico" />;
}
