import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-canada');
}

export default function FreshStartStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-canada" />;
}
