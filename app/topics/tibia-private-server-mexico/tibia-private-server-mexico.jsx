import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-mexico');
}

export default function TibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-mexico" />;
}
