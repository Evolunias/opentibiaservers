import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe');
}

export default function NepreniaPvpeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe" />;
}
