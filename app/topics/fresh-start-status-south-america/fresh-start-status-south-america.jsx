import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-south-america');
}

export default function FreshStartStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-south-america" />;
}
