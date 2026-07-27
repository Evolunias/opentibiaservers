import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe');
}

export default function ArcaniarlPvpeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe" />;
}
