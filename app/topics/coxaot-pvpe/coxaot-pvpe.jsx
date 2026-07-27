import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe');
}

export default function CoxaotPvpeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe" />;
}
