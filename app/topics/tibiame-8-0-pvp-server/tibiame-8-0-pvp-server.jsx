import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-pvp-server');
}

export default function Tibiame80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-pvp-server" />;
}
