import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-germany');
}

export default function TibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-germany" />;
}
