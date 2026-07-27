import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-pvp-server');
}

export default function DuraOnline11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-pvp-server" />;
}
