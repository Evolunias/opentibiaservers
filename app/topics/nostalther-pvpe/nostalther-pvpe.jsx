import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe');
}

export default function NostaltherPvpeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe" />;
}
