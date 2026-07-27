import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-usa');
}

export default function TibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-usa" />;
}
