import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp');
}

export default function TibijkaPvpKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp" />;
}
