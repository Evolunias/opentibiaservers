import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-poland');
}

export default function TibijkaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-poland" />;
}
