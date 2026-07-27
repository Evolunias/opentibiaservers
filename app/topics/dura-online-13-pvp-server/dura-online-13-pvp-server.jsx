import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-pvp-server');
}

export default function DuraOnline13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-pvp-server" />;
}
