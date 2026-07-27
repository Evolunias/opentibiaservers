import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-sweden');
}

export default function TibiaOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-sweden" />;
}
