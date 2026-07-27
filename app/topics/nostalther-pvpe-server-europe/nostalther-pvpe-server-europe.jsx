import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-europe');
}

export default function NostaltherPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-europe" />;
}
