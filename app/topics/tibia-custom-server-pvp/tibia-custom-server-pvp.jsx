import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-pvp');
}

export default function TibiaCustomServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-pvp" />;
}
