import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-germany');
}

export default function TibijkaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-germany" />;
}
