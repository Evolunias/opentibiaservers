import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-latin-america');
}

export default function NostaltherPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-latin-america" />;
}
