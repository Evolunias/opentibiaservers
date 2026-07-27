import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp');
}

export default function OlderaHighExpKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp" />;
}
