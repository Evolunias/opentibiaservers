import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-client');
}

export default function Tibia1098ServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-client" />;
}
