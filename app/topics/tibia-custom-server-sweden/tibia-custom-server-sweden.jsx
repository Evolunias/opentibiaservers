import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-sweden');
}

export default function TibiaCustomServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-sweden" />;
}
