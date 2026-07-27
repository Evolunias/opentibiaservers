import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe');
}

export default function TibiantisPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe" />;
}
