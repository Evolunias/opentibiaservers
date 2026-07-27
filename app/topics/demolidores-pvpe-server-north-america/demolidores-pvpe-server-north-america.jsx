import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-north-america');
}

export default function DemolidoresPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-north-america" />;
}
