import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-latin-america');
}

export default function DemolidoresPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-latin-america" />;
}
