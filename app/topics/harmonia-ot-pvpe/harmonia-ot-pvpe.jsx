import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe');
}

export default function HarmoniaOtPvpeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe" />;
}
