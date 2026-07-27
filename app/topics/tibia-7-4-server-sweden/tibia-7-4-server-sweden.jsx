import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-sweden');
}

export default function Tibia74ServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-sweden" />;
}
