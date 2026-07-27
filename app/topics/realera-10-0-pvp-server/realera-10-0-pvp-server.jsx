import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-pvp-server');
}

export default function Realera100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-pvp-server" />;
}
