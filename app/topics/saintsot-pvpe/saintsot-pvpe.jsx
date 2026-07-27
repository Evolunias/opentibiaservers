import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe');
}

export default function SaintsotPvpeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe" />;
}
