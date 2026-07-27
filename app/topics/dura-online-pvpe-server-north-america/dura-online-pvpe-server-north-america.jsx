import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-north-america');
}

export default function DuraOnlinePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-north-america" />;
}
