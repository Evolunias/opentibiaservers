import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-germany');
}

export default function NostaltherPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-germany" />;
}
