import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-sweden');
}

export default function TibiaraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-sweden" />;
}
