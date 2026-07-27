import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-poland');
}

export default function TibijkaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-poland" />;
}
