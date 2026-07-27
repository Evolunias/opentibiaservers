import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-sweden');
}

export default function Tibia13ServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-sweden" />;
}
