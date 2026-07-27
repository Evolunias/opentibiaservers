import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-south-america');
}

export default function TibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-south-america" />;
}
