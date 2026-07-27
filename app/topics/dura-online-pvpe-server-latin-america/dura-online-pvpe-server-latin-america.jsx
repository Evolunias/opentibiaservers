import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-latin-america');
}

export default function DuraOnlinePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-latin-america" />;
}
