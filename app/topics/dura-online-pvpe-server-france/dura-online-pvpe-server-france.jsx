import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-france');
}

export default function DuraOnlinePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-france" />;
}
