import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-client');
}

export default function TibiaHighExpServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-client" />;
}
