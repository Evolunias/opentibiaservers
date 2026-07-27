import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-sweden');
}

export default function Tibia1098ServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-sweden" />;
}
