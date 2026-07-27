import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-sweden');
}

export default function FreshStartStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-sweden" />;
}
