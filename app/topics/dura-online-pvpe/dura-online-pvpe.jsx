import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe');
}

export default function DuraOnlinePvpeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe" />;
}
