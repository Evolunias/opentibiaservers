import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-pvp-server');
}

export default function Realera76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-pvp-server" />;
}
