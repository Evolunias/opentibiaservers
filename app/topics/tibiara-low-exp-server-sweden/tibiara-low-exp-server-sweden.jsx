import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-sweden');
}

export default function TibiaraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-sweden" />;
}
