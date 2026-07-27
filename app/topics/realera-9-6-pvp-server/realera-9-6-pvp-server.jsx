import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-pvp-server');
}

export default function Realera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-pvp-server" />;
}
