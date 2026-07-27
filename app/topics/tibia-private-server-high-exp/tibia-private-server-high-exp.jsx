import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-high-exp');
}

export default function TibiaPrivateServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-high-exp" />;
}
