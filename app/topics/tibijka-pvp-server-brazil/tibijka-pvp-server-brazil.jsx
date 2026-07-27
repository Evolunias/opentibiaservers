import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-brazil');
}

export default function TibijkaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-brazil" />;
}
