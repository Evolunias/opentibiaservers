import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera');
}

export default function CustomOlderaKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera" />;
}
