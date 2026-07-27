import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-pvp-server');
}

export default function Realera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-pvp-server" />;
}
