import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-mexico');
}

export default function DuraOnlinePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-mexico" />;
}
