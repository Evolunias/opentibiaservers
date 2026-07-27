import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-client');
}

export default function TibiaOtServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-client" />;
}
