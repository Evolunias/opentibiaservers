import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-south-america');
}

export default function NostaltherPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-south-america" />;
}
