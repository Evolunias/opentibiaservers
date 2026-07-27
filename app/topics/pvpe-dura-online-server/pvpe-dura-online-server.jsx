import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-dura-online-server');
}

export default function PvpeDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-dura-online-server" />;
}
