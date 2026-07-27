import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe');
}

export default function InfernalOtPvpeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe" />;
}
