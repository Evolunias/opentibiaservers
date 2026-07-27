import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe');
}

export default function EvoluniaPvpeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe" />;
}
