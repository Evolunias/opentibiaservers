import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-non-pvp');
}

export default function TibiaCustomServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-non-pvp" />;
}
