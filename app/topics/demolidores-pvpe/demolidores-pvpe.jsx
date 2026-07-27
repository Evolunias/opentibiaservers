import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe');
}

export default function DemolidoresPvpeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe" />;
}
