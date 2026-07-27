import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-france');
}

export default function ShadowcoresPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-france" />;
}
