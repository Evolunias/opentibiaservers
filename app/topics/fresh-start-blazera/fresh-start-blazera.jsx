import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera');
}

export default function FreshStartBlazeraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera" />;
}
