import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe');
}

export default function NoxiousotPvpeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe" />;
}
