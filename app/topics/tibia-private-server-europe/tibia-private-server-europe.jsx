import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-europe');
}

export default function TibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-europe" />;
}
