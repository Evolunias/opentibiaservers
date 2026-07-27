import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera');
}

export default function FreshStartRealeraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera" />;
}
