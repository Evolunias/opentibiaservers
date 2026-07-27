import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-pvpe-server');
}

export default function DuraOnline80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-pvpe-server" />;
}
