import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera');
}

export default function ActiveOlderaKeywordPage() {
  return <StaticKeywordPage slug="active-oldera" />;
}
