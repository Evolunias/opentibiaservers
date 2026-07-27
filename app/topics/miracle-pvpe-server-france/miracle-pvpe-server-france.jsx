import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-france');
}

export default function MiraclePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-france" />;
}
