import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-canada');
}

export default function TibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-canada" />;
}
