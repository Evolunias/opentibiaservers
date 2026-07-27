import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-usa');
}

export default function TibijkaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-usa" />;
}
