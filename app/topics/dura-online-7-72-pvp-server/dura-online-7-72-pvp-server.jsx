import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-72-pvp-server');
}

export default function DuraOnline772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-72-pvp-server" />;
}
