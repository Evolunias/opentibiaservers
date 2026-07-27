import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe');
}

export default function NtoStarPvpeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe" />;
}
