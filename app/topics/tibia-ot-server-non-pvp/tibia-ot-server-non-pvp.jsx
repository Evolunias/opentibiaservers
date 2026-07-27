import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-non-pvp');
}

export default function TibiaOtServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-non-pvp" />;
}
