import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-pvp-server');
}

export default function Realera772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-pvp-server" />;
}
