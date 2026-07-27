import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-non-pvp-server');
}

export default function Tibiame71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-non-pvp-server" />;
}
