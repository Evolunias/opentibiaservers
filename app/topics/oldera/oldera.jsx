import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera');
}

export default function OlderaKeywordPage() {
  return <StaticKeywordPage slug="oldera" />;
}
