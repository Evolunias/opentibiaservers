import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-north-america');
}

export default function FreshStartStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-north-america" />;
}
