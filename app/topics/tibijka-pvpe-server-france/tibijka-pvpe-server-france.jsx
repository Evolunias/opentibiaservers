import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-france');
}

export default function TibijkaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-france" />;
}
