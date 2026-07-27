import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-brazil');
}

export default function NostaltherPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-brazil" />;
}
