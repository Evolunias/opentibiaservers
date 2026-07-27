import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-mexico');
}

export default function NostaltherPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-mexico" />;
}
