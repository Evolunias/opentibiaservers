import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-active');
}

export default function TibiaPrivateServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-active" />;
}
