import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-pvp-server');
}

export default function Realera71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-pvp-server" />;
}
