import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-sweden');
}

export default function TibiaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-sweden" />;
}
