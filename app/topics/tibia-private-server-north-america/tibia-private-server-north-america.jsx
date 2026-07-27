import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-north-america');
}

export default function TibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-north-america" />;
}
