import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-france');
}

export default function TibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-france" />;
}
