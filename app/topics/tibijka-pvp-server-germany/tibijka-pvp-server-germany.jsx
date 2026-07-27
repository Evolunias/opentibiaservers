import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-germany');
}

export default function TibijkaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-germany" />;
}
