import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-pvp-server');
}

export default function DuraOnline80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-pvp-server" />;
}
