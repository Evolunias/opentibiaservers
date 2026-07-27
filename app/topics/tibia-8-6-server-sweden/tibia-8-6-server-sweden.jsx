import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-sweden');
}

export default function Tibia86ServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-sweden" />;
}
