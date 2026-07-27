import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-pvp-server');
}

export default function DuraOnline14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-pvp-server" />;
}
