import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-mexico');
}

export default function FreshStartStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-mexico" />;
}
