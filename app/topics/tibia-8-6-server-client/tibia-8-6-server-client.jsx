import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-client');
}

export default function Tibia86ServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-client" />;
}
