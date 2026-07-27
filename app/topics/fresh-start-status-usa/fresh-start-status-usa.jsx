import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-usa');
}

export default function FreshStartStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-usa" />;
}
