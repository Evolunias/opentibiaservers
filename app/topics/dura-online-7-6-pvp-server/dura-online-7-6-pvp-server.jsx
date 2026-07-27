import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-pvp-server');
}

export default function DuraOnline76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-pvp-server" />;
}
