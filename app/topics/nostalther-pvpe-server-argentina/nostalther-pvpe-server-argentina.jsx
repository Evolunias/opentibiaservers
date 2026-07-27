import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-argentina');
}

export default function NostaltherPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-argentina" />;
}
