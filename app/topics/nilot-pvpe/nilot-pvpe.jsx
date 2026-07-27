import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe');
}

export default function NilotPvpeKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe" />;
}
