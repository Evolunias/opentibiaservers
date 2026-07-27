import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-france');
}

export default function NostaltherPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-france" />;
}
