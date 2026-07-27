import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-non-pvp-server');
}

export default function Tibiara854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-non-pvp-server" />;
}
