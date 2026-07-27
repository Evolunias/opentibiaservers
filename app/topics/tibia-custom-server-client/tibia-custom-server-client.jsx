import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-client');
}

export default function TibiaCustomServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-client" />;
}
