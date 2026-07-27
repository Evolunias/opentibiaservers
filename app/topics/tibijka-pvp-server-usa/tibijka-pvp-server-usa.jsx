import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-usa');
}

export default function TibijkaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-usa" />;
}
