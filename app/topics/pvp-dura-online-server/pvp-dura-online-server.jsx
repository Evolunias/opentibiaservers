import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-dura-online-server');
}

export default function PvpDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-dura-online-server" />;
}
