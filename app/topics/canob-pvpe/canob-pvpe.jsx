import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe');
}

export default function CanobPvpeKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe" />;
}
