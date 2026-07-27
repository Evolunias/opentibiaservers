import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe');
}

export default function LumineraPvpeKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe" />;
}
