import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-usa');
}

export default function TibiaraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-usa" />;
}
