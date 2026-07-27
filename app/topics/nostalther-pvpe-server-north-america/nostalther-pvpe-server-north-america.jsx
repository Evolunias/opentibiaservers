import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-north-america');
}

export default function NostaltherPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-north-america" />;
}
