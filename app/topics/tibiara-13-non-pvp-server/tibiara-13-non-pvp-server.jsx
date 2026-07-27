import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-non-pvp-server');
}

export default function Tibiara13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-non-pvp-server" />;
}
