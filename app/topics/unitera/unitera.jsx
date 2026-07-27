import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera');
}

export default function UniteraKeywordPage() {
  return <StaticKeywordPage slug="unitera" />;
}
