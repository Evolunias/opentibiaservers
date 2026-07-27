import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-uk');
}

export default function NostaltherPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-uk" />;
}
