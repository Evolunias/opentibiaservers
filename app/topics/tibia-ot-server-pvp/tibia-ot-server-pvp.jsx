import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-pvp');
}

export default function TibiaOtServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-pvp" />;
}
