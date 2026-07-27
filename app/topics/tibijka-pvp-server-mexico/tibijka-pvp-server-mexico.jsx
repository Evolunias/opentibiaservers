import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-mexico');
}

export default function TibijkaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-mexico" />;
}
