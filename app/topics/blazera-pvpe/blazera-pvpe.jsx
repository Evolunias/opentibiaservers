import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe');
}

export default function BlazeraPvpeKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe" />;
}
