import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-list');
}

export default function TibiaPrivateServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-list" />;
}
