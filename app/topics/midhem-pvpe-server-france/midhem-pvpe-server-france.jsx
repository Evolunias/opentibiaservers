import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-france');
}

export default function MidhemPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-france" />;
}
