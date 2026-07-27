import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-canada');
}

export default function FreshStartClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-canada" />;
}
