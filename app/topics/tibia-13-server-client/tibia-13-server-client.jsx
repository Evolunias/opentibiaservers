import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-client');
}

export default function Tibia13ServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-client" />;
}
