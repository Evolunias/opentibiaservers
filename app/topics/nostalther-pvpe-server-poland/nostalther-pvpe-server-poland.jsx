import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-poland');
}

export default function NostaltherPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-poland" />;
}
