import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-usa');
}

export default function NostaltherPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-usa" />;
}
