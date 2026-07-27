import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-argentina');
}

export default function TibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-argentina" />;
}
