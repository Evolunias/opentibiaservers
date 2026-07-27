import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-pvp-server');
}

export default function DuraOnline96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-pvp-server" />;
}
