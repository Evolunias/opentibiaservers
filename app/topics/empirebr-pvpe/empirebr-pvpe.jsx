import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe');
}

export default function EmpirebrPvpeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe" />;
}
