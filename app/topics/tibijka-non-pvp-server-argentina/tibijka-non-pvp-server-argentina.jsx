import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-argentina');
}

export default function TibijkaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-argentina" />;
}
