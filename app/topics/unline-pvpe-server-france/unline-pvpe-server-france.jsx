import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-france');
}

export default function UnlinePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-france" />;
}
