import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-south-america');
}

export default function DemolidoresPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-south-america" />;
}
