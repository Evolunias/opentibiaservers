import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-brazil');
}

export default function TibijkaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-brazil" />;
}
