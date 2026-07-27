import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-canada');
}

export default function NostaltherPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-canada" />;
}
