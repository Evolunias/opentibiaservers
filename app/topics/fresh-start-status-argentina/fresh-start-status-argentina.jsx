import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-argentina');
}

export default function FreshStartStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-argentina" />;
}
