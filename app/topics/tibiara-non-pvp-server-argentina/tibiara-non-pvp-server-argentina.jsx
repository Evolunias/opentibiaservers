import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-argentina');
}

export default function TibiaraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-argentina" />;
}
