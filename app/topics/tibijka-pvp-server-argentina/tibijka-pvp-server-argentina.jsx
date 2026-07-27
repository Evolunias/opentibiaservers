import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-argentina');
}

export default function TibijkaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-argentina" />;
}
