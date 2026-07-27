import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-uk');
}

export default function TibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-uk" />;
}
