import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-dura-online-server');
}

export default function NonPvpDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-dura-online-server" />;
}
