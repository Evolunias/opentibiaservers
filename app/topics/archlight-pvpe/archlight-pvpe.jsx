import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe');
}

export default function ArchlightPvpeKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe" />;
}
