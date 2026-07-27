import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-status');
}

export default function OlderaStatusKeywordPage() {
  return <StaticKeywordPage slug="oldera-status" />;
}
