import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-client');
}

export default function Tibia74ServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-client" />;
}
